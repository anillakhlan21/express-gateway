"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.listen(PORT, (err) => {
    if (err)
        throw err;
    console.log(`app instance is created successfully and running on port no. ${PORT}`);
});
//# sourceMappingURL=gateway.js.map