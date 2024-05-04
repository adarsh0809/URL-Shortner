import  express  from "express";
import { urlModel } from "../model/shortUrl";

export const createUrl = async ( req:express.Request , res:express.Response) => {
    try {
        const {fullUrl} = req.body;
        const urlFound = await urlModel.find({fullUrl});
        if (urlFound.length > 0) {
            res.status (409).send(urlFound)
        }
        else {
            const shortUrl = await urlModel.create({fullUrl});
            res.status(201).send(shortUrl);
        }
    } catch (error) {
        res.status(500).send ({message : "something is wrong with the bloody server"})
    }
}



export const getAllUrl = async ( req:express.Request , res:express.Response) => {

    try {
        const shortUrl = await urlModel.find();
        if (shortUrl.length<0){
            res.status(404).send({message : "ShortUrls not Found"})
        }
        else {
            res.status(200).send(shortUrl)
        }
    } catch (error) {
        res.status(500).send ({message : "something is wrong with the bloody server"})
    }
}



export const getUrl = async ( req:express.Request , res:express.Response) => {
    try {
        const shortUrl = await urlModel.findOne({shortUrl :req.params.id});
        if (!shortUrl){
            res.status(404).send({message : "ShortUrl not Found"})
        }
        else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`)
        }
    } catch (error) {
        res.status(500).send ({message : "something is wrong with the bloody server"})
    }
}



export const deleteUrl = async ( req:express.Request , res:express.Response) => {
    try {
        const shortUrl = await urlModel.findByIdAndDelete({_id : req.params.id});
        if (!shortUrl){
            res.status(404).send({message : "ShortUrl not Found"})
        }
        else {
            res.status(200).send({message : "ShortUrl Deleted Succesfully"})
        }
    } catch (error) {
        res.status(500).send ({message : "something is wrong with the bloody server"})
    }
}