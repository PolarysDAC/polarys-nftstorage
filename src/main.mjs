import { NFTStorage } from 'nft.storage'
import 'dotenv/config';

const token = process.env.TOKEN
const client = new NFTStorage({ token: token })

async function main() {
  for (let i = 0; i < 2500; i ++) {
    const metadata = await client.store({
      name: 'Polarys',
      description: 'Polarys NFT',
      image: `https://bafybeiefenelvi7uji5bpp7yqkihxn2ivaptcezkz4kd5mllodq6gynndi.ipfs.nftstorage.link/Polarys_Data_Set_{${id+1}}.jpg`,
    })
    console.log(metadata.url)
  }
}

main()