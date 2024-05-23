const themes = require('../src/themes.json');
const { bioCard } = require('../src/render.js');

module.exports = async (req, res) => {
    const { username, theme } = req.query;

    // Check if theme exists
    if (!themes[theme]) {
        res.status(400).send("Invalid theme provided");
        return;
    }

    const { borderColor, bgColor, textColor } = themes[theme];

    const user = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());

    // Check if GitHub user exists
    if (user.message) {
        res.status(404).send("User not found");
        return;
    }

    const svg = bioCard(borderColor, bgColor, textColor, user);

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
    res.send(svg);
}
