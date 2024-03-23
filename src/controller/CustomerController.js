const Customer = require('../models/Customer');

class CustomerController {

    getAllCustomers = async(req, res) => {
        try {
            const customerList = await Customer.find();
            console.log("Sent Customer Data list");
            res.send(customerList);
        } catch (error) {
            return error
        }
    
    }

    
    saveCustomer = async(req, res) => {
        console.log("Save Customer Req : ", req.body);
        const data = await Customer.create(req.body);
        res.send("Customer Saved Successfully...!");
    }


    updateCustomer = async(req, res) => {
        const customerId = req.params.customerID;
        console.log('req customer ID : ', customerId);
    
        const updateData = req.body;

        Customer.findOneAndUpdate({ customerId: customerId}, updateData, { new: true })
            .then((updatedCustomer) => {
                if (!updatedCustomer) {
                    return res.status(404).json({
                        error: "Customer not found"
                    });
                }
    
                return res.status(200).json({
                    success: "Update successfully",
                    customer: updatedCustomer
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    error: "An error occurred while updating the customer"
                });
            });
    }

    deleteCustomer = async(req, res) => {
        const customerId = req.params.customerId;
        console.log("req delete customer id : ", customerId);

        Customer.findOneAndDelete({customerId: customerId})
            .then(() => {
                return res.status(200).json({
                    success: "Delete successfully"
                });
            })
            .catch(err => {
                return res.status(400).json({ error: err });
            });
    }

    getCustomerById = async(req, res) => {
        try {
            const customerId = req.params.customerId;
            const customer = await Customer.findOne({customerId: customerId});
            console.log(customerId+"Sent Customer Data"+customer);
            if (customer == null){
                 return res.status(200).json( null );
            }
            res.send(customer);
        } catch (error) {
            return error
        }
    }

}


module.exports = CustomerController;