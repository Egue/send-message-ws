const express = requiere('express');
const router = express.Router();
/**Router
 * 
 */
const chatWoodHook = async(req , res) => {
    const body = req.body
    console.log(body)
    res.send(body);
};

/**Controller
 * 
 */
router.post('/chatwood-hook' , chatWoodHook)
module.exports = router;