const express = require("express");
const router = express.Router();

const File = require("../../controllers/File");

router.post("/", File.saveFile);
router.get("/:path", File.getFile);

module.exports = router;
