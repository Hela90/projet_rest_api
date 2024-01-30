const Contact = require("../Models/Contact")

exports.AddContact  = async(req,res)=>{
    try {
        const found = await Contact.findOne({email : req.body.email})
        if (found) {
           return res.status(400).send('Email already exists')
        }

        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(200).send({Msg :'contact added', newContact})
        
    } catch (error) {
        res.status(500).send('could not add contact')
    }
}

exports.GetAllContacts = async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({Msg : 'Contact List', contacts})
    } catch (error) {
        res.status(500).send('could not get contacts')
    }
}

exports.DeleteContact = async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndDelete(id)

        res.status(200).send('Contact Deleted')
    } catch (error) {
        res.status(500).send('could not delete contact')
    }
}

exports.UpdateContact = async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndUpdate(id, {$set : req.body})
        
        res.status(200).send('contact Updated')
    } catch (error) {
        res.status(500).send('could not updated contact')
    }
}

exports.GetOneContact = async(req,res)=>{
    try {
        const {id} = req.params
        const contact= await Contact.findById(id)

        res.status(200).send({Msg : "one contact ", contact})
    } catch (error) {
        res.status(500).send('could not get one contact')
    }
}