import { detectMarker, getDataStream } from "./shared";

const dataStream = getDataStream();
const marker = detectMarker(dataStream, 14);

console.log(marker);