const { mongoose } = require("../conection/conectionBD");
const validator = require("validator");

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
    
    constructor( body ){
        this.body = body;
        this.errors =  [];
        this.user = null;
    }

    async register() {
        this.valida();
        if ( this.errors.length > 0 )  return;
        try {
            this.user =  await LoginModel.create( this.body );
        } catch (error) {
            if( error ) throw error;
        }
    }

    valida() {
        this.cleanUp();
        console.log("chamou valida")

        //validação
        //validação do email
        if ( !validator.isEmail( this.body.email)) { this.errors.push("E-mail invalido"); }
            
        // A senha deve ter entre 8 e 30 caracteres
        if( this.body.password.length < 3 || this.body.password.length > 30 ) {
            this.errors.push("A senha precisa estar em entre 3 e 30 caracteres")
        }
    }

    cleanUp(){
        console.log("cleanUp")
        for( const key in this.body ){
            if (typeof this.body[key] !== "string" ) {
                this.body[key] = '';
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        };
        console.log("fim do cleanUp")
    }

}


module.exports = Login;