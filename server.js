const express = require(`express`);
const db = require(`./database`)


const app = express();
const port = 5100

// Create a GET endpoint that retrieves all patients and displays their:

// patient_id
// first_name
// last_name
// date_of_birth
const getpatient = `select patient_id, first_name,last_name,date_of_birth
from patients`
app.get(`/patients`, (req, res)=>{
    db.query(getpatient, (err, result)=>{
        if(err){
            console.log(err);
            
        }else{
            res.json(result)
        }
    })
})

// Create a GET endpoint that displays all providers with their:

// first_name
// last_name
// provider_specialty
const getproviders = `select first_name, last_name, provider_specialty
from providers`
app.get(`/providers`, (req, res)=>{
    db.query(getproviders, (err, result)=>{
        if(!err){
            res.json(result);
        }else(
            console.log(err)
        )
    })
})


// Create a GET endpoint that retrieves all patients by their first name

const getpatientfirst = `select first_name from patients`
app.get(`/patients/firstname`, (req, res)=>{
    db.query(getpatientfirst, (err, result)=>{
        if(!err){
            res.json(result);
        }else(
            console.log(err)
        )
    })
})


// Create a GET endpoint that retrieves all providers by their specialty

const providerspecial = `select provider_specialty from providers`;

app.get(`/providers/specialty`, (req, res)=>{
    db.query(providerspecial, (err, result)=>{
        if(!err){
            res.json(result)
        }else(
            console.log(err)
            
        )
    })
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
    
})