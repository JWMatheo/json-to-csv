import { appendFileSync, readFile } from "fs";
appendFileSync("./LuxNFT.csv", "NFT #;Type;Hotel;Place;Experience;Night;Surprise" + "\r\n");
for (let i = 0; i < 1000; i++) {
    readFile(`../luxMetadataReveal/${i}.json`, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let JSONData = JSON.parse(data);
            appendFileSync("./LuxNFT.csv", String(i) + ";");
            JSONData.attributes.forEach(element => {
                try {
                    appendFileSync("./LuxNFT.csv", String(element.value) + ";");
                  } catch (err) {
                    console.error(err);
                  }
            });
            appendFileSync("./LuxNFT.csv","\r\n");
        }
    }) 
} 
