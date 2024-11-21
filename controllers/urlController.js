const urlSchema = require('../models/urlSchema');

async function getAll (req, res) {
    const URLs = await urlSchema.find({});
    res.status(200).json(URLs);
}

async function add (req, res) {
    const url = req.body.url;
    if (!url) 
        return res.status(400).send('URL is required');
    
    try {
        const existingUrl = await urlSchema.findOne({ url });
        if (existingUrl) 
            return res.status(409).send('URL already exists');
    
        const size = await urlSchema.find({});
        await urlSchema.create({
            id: size.length + 1,
            url: url,
            shortCode: url.substring(0, 5) + Math.random().toString(36).substr(2, 5),
            cnt: 1,
            createdAt: new Date().toUTCString(),
            updatedAt: new Date().toUTCString()
        });
    } catch(err) {
        console.error(err);
        return res.status(500).json({
            message: 'Error in creating URL',
            error: err
        });
    }

    res.status(201).send('a7a a777777aaaa 55555555 post is done');
};

async function get (req, res) {
    const shortCode = req.params.short;
    if (!shortCode)
        return res.status(400).send('Short URL is required');

    const url = await urlSchema.findOne({ shortCode: shortCode });
    if (!url) 
        return res.status(404).send('Short URL Not found');
    
    urlSchema.updateOne({ _id: url._id }, { $set: { cnt: url.cnt+1 } })
        .then(() => {
            console.log(url);
            res.status(200).send(url);
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({
                message: 'Error in find URL',
                error: err
            });
        });
}


async function upd (req, res) {
    const shortCode = req.params.short;
    const newUrl = req.body.url;
    if (!shortCode || !newUrl) 
        return res.status(400).send('URL and Short code is required'); 

    const url = await urlSchema.findOne({ shortCode: shortCode });
    if (!url) 
        return res.status(404).send('URL Not Found');

    urlSchema.updateOne({ _id: url._id }, { $set: { url: newUrl, updatedAt: new Date().toUTCString() } })
        .then(updatedUrl => {
            console.log(updatedUrl);
            res.status(200).send('URL is Updated successflly');
        })
        .catch(err => {
            console.error(err);
            res.status(417).send('Failed URL Update');
        });
}

async function del (req, res) {
    const shortCode = req.params.short;
    if (!shortCode) 
        return res.status(400).send('Short code is required');

    urlSchema.deleteOne({ shortCode: shortCode })
        .then(result => {
            console.log(result);
            if (result.deletedCount === 1)
                res.status(200).send('URL is Deleted successflly');
            else 
                res.status(404).send('URL Not Found');
        })
        .catch(err => {
            console.error(err);
            res.status(417).send('Failed URL Delete');
        })
}

async function sts (req, res) {
    const shortCode = req.params.short;
    const url = await urlSchema.findOne({ shortCode: shortCode });
    if (!url)
        return res.status(404).send('URL Not Found');

    res.status(200).json({ "URL access count": url.cnt});
}

module.exports = {
    add,
    get,
    upd,
    del,
    sts,
    getAll
};