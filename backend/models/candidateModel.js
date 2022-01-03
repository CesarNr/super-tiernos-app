import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        age: { type: Number, required: true },
        sponsor: { type: String, required: true},
        sponsorNumber: { type: Number, required: true },
        genre: { type: String, required: true },
        health: { type: String, required: true },
        sterilized: { type: String, required: true },
        description: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const Candidate = mongoose.model('Candidate', candidateSchema);
export default Candidate;