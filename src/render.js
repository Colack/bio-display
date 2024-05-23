const width = '500';
const height = '250';

const bioCard = (borderColor, bgColor, textColor, user) => {
    // Generates a Bio card for a given user. Returns a string of SVG.
    return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" rx="4" fill="${bgColor}"/>
    ${borderColor ? `<rect width="${width}" height="${height}" rx="8" stroke="${borderColor}" stroke-opacity="1"/>` : ''}
    
    <mask id="mask0" mask-type="alpha">
    <rect width="${width}" height="${height}" rx="8" fill="#fff"/>
    </mask>
    <g mask="url(#mask0)">
    <image width="${width}" height="${height}" href="${user.avatar_url}"/>
    </g> 
    </svg>
    `;
}

module.exports = {
    bioCard
};
