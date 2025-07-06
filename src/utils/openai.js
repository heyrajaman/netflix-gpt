// import OpenAI from "openai"
// import { OPENAI_KEY } from "./constants";

// const openai = new OpenAI({
//     apiKey: OPENAI_KEY,
//     dangerouslyAllowBrowser: true,
// });

// export default openai;

import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.REACT_APP_OPENAI_KEY;

const openai = new GoogleGenAI({ apiKey: GEMINI_API_KEY,
    dangerouslyAllowBrowser: true,
 });

export default openai;
 