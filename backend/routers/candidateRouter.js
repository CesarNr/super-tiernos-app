import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Candidate from '../models/candidateModel.js';
import { isAdmin, isAuth } from '../utils.js';

const candidateRouter = express.Router();

candidateRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const candidates = await Candidate.find({});
        res.send(candidates);
    })
);

candidateRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        const createdCandidates = await Candidate.insertMany(data.candidates);
        res.send({ createdCandidates });
    })
);

candidateRouter.get(
    '/:id',
    expressAsyncHandler(async (req,res) => {
        const candidate = await Candidate.findById(req.params.id);
        if (candidate) {
            res.send(candidate);
        } else {
            res.status(404).send({ message: 'Candidato no encontrado.'});
        }
    })
);


candidateRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async(req, res) => {
        const candidate = new Candidate({
            name: 'Sample Candidate Name',
            category: 'Canino',
            image: '/images/p1.jpeg',
            age:'100',
            sponsor:'Obi-Wan Kenobi',
            sponsorNumber:'3003004444',
            genre: 'Macho',
            health: 'buena',
            sterilized: 'Si',
            description:'Un amigo de una galaxia muy muy lejana ha venido a rescatarte del malvado imperio galactico',
        });
        const createdCandidate = await candidate.save();
        res.send({ message: 'Candidate Created', candidate: createdCandidate });
    })
);


candidateRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const candidateId = req.params.id;
        const candidate = await Candidate.findById(candidateId);
        if (candidate) {
            candidate.name = req.body.name;
            candidate.category = req.body.category;
            candidate.image = req.body.image;
            candidate.age = req.body.age;
            candidate.sponsor = req.body.sponsor;
            candidate.sponsorNumber = req.body.sponsorNumber;
            candidate.genre = req.body.genre;
            candidate.health = req.body.health;
            candidate.sterilized = req.body.sterilized;
            candidate.description = req.body.description;
            const updatedCandidate = await candidate.save();
            res.send({ message: 'Candidate Updated', candidate: updatedCandidate });
        } else {
            res.status(404).send({ message: 'Candidate Not Found'});
        }
    })
);

candidateRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const candidate = await Candidate.findById(req.params.id);
        if (candidate) {
            const deleteCandidate = await candidate.remove();
            res.send({ message: 'Candidate deleted', candidate: deleteCandidate});
        } else {
            res.status(404).send({ message: 'Candidate not found'});
        }
    })
);

export default candidateRouter;