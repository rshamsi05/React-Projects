
//model Schema for the DB
const transaction = require('../models/Transaction')


//@desc Get all transactions
//@route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req,res,next) => {
    try {
        const transactions = await transaction.find();

        res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        //standard error message 
        console.error('Error in getTransactions:', error);
        res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
} 

//@desc Add transaction
//@route POST /api/v1/transactions
// @access Public
exports.addTransactions = async (req,res,next) => {
    try {
        const { text, amount } = req.body;

        const tender = await transaction.create(req.body);

        res.status(201).json({
            success: true,
            data: tender
        })
    } catch (error) {
        if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val => val.message);
            res.status(400).json({
                success: false,
                error: messages
            })
        }else {
            res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
} 


//@desc Delete transactions
//@route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransactions = async (req,res,next) => {
    try {
        const tender = await transaction.findById(req.params.id);
        if(!tender){
            res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        } else {
            await tender.deleteOne();
            res.status(200).json({
                success: true,
                data: {}
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
} 