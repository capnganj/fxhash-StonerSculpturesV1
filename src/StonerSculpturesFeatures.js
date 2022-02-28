import { interpolateCool, interpolateInferno, interpolateMagma, interpolateWarm, interpolateViridis } from 'd3-scale-chromatic'

class StonerSculpturesFeatures {
    constructor() {

        //color scheme 
        this.color = {
            name: ""
        };
        this.setColor();

        //drives major parameter of mobius 3d geometry
        this.major = {
            tag: "",
            value: ""
        }
        this.setMajor();

        //drives a parameter of mobius 3d geometry
        this.a = {
            tag: "",
            value: ""
        };
        this.setA();

        //drives a parameter of mobius 3d geometry
        this.b = {
            tag: "",
            value: ""
        };
        this.setB();
        

    }

    interpolateFn(val){
        switch (this.color.name) {
            case "Cool": return interpolateCool(val);
            case "Warm": return interpolateWarm(val);
            case "Viridis": return interpolateViridis(val);
            case "Magma": return interpolateMagma(val);
            case "Inferno": return interpolateInferno(val);
            default:
                return "high"
        }
    }

    map(n, start1, stop1, start2, stop2){
        const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
        return newval;
    }

    setColor(){
        let c = fxrand();
        
        if( c < 0.5){
            this.color.name = "Warm"
        }
        else if( c < 0.65){
            this.color.name = "Cool"
        }
        else if( c < 0.8){
            this.color.name = "Viridis"
        }
        else if( c < 0.9){
            this.color.name = "Magma"
        }
        else {
            this.color.name = "Inferno"
        }
    }

    setMajor(){
        let t = fxrand();
        this.major.value = this.map(t, 0, 1, 1.0, 1.5);

        //set feature tag value
        if (t < 0.15) {
            this.major.tag = "Shallow"
        }
        else if ( t < 0.85) {
            this.major.tag = "Medium"
        }
        else {
            this.major.tag = "Deep"
        }
    }

    setA(){
        let c = fxrand();
        this.a.value = this.map(c, 0, 1, 0.25, 0.5);

        //set feature tag values
        if (c < 0.4) this.a.tag = "Flat";
        else if (c < 0.6) this.a.tag = "Smooth";
        else if (c < 0.85) this.a.tag = "Bulge";
        else this.a.tag = "Bloat"


    }

    setB(){
        let c = fxrand();
        this.b.value = this.map(c, 0, 1, 0.7, 0.9);

        //set feature tag values
        if (c < 0.4) this.b.tag = "Smooth";
        else if (c < 0.6) this.b.tag = "Wheeze";
        else if (c < 0.85) this.b.tag = "a";
        else this.b.tag = "Hack"


    }
}

export {StonerSculpturesFeatures}