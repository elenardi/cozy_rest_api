const models = require('../models/index')
const space = models.Space

class SpaceController {
    static async createSpace (req, res){
        const {name, city, country, price, imageUrl, rating, address, phone, mapUrl, photos, numberOfKitchens, numberOfBedrooms, numberOfCupboards} = req.body;
        // const user = jwt.verify(req.cookies.refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, decoded) => {
        //     if(error) return res.sendStatus(403);
        //     return decoded
        // })
        try{
            await space.create({
                name: name,
                city: city,
                country: country,
                price: price,
                imageUrl: imageUrl,
                rating: rating,
                address: address,
                phone: phone,
                mapUrl: mapUrl,
                photos: photos,
                numberOfKitchens: numberOfKitchens,
                numberOfBedrooms: numberOfBedrooms,
                numberOfCupboards: numberOfCupboards,
            })
            res.json({msg: "Created Space Success"})
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

    static async getSpace (req, res){
        try{
            const allSpace = await space.findAll()
            if(allSpace.length > 0){
                res.status(200).json(allSpace)
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

module.exports = SpaceController