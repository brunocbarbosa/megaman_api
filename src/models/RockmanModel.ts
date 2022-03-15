import { Schema, model} from "mongoose";

interface Rockman {
  about: string,
  company: string,
  creator: string,
  games:{
    classicSeries:[{
      title: string,
      subtitle: string,
      story: string,
      platform: string,
      release: Date
    }]
  }
}

const schema = new Schema<Rockman>({
  about: {type: String, required: true},
  company: {type: String, required: true},
  creator: {type: String, required: true},
  games:{
    classicSeries:[{
      title: {type: String, required: true},
      subtitle: {type: String, required: true},
      story: {type: String, required: true},
      platform: {type: String, required: true},
      release: {type: Date, required: true}
    }]
  }
})

const RockmanModel = model<Rockman>('rockman_1', schema);

export { RockmanModel }

