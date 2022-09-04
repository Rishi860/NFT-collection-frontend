export default function handler(req, res) {
  const tokenId = req.query.tokenId;
  const image_url =
    "https://raw.githubusercontent.com/Rishi860/NFT-collection-frontend/main/public/cryptodevs/";

  res.status(200).json({
    name: "Crypto Dev #" + tokenId,
    description: "Crypto Dev is a collection of devleopers in crypto",
    image: image_url + tokenId + ".svg",
  });
}
