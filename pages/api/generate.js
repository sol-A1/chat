import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.business),
    temperature: 0.1,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(business) {
  const capitalizedBusiness =
    business[0].toUpperCase() + business.slice(1).toLowerCase();
  return `Suggest three business name ideas for the job type/industry specified.
`;
}
