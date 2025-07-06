import { model, Schema } from 'mongoose';

const purchasesSchema = new Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    customerFirstName: { type: String },
    customerEmail: { type: String, required: true },
    customerState: { type: String },
  },
  { timestamps: true, versionKey: false },
);

export const PurchasesCollection = model('purchases', purchasesSchema);
