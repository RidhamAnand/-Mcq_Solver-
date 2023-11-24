const { Configuration, OpenAIApi } = require("openai");



const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const responseController = async (req, res) => {

    const { question, option1, option2, option3, option4 } = req.body;

    const text = "imagine you are giving an mcq test \nwhere question is:\nQ. " + question + "\ngiven options are:\n A. " + option1 + "\n B. " + option2 + "\n C. " + option3 + "\n D. " + option4 + "\n Choose the correct option";
    console.log(text);

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        max_tokens: 7,
        temperature: 0
    })

    console.log(response.data.choices[0].text ,"from backend");
    res.status(200).json({ answer: response.data.choices[0].text })


}
module.exports = responseController;
