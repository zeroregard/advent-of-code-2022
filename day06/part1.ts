import { detectMarker, getDataStream } from "./shared";

const dataStream = getDataStream();
const marker = detectMarker(dataStream);

console.log(marker);