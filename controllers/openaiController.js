const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage =async (req,res)=>{
    try {
        const response = await openai.createImage({
            prompt: 'Polar bear on ice skates',
            n: 1,
            size:'512x512'
        })
        const imageUrl = response.data.data[0].url;
        res.status(200).json({
            succes:true,
            data:imageUrl
        })
    } catch (error) {
        if(error.response){
            console.log()
        }
    }
}

module.exports = {
    generateImage
}