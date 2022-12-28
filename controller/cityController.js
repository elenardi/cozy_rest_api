const models = require('../models/index')
const cityRepository = models.City

class CityController {
    static async createCity (req, res){
        const {name, imageUrl, isPopular} = req.body;
        // const user = jwt.verify(req.cookies.refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, decoded) => {
        //     if(error) return res.sendStatus(403);
        //     return decoded
        // })
        try{
            await cityRepository.create({
                name: name,
                imageUrl: imageUrl,
                isPopular: isPopular,
            })
            res.json({msg: "Created City Success"})
        }catch (error){
            if(error.errors){
                res.status(404).json({
                    message: error.errors[0].message
                })
            }else{
                res.status(404).json({
                    message: error.message
                })
            }
        }
    }

    static async getCity (req, res){
        try{
            const allCity = await cityRepository.findAll()
            if(allCity.length > 0){
                res.status(200).json(allCity)
            }else{
                res.status(200).json({
                    message: "Data Not Found"
                })
            }

        }catch(err){
            res.status(404).json({
                message: err.message
            })

        }
    }
}

module.exports = CityController