import Jiro from '@madewithjiro/jiro-sdk';
const { Store } = new Jiro();

export default async (req, res) => {
    // Get all the most recent posts
    console.log('Getting all of the scores')
    let list = await Store.get('gems', 'scores');
    if(!list) list = { scores: [] };
    let scores = list.scores;

    scores = scores.sort((a, b) => a.score < b.score ? 1 : -1);
    scores = scores.slice(0, scores.length > 9 ? 9 : scores.length);

    res.status(200).json({ scores });
}
