import { Schema, model } from 'mongoose'

const productSchema = new Schema(

	{
		name: {
			type: String,
			required: [true, "The field name is required"],
			minLength: [2, 'the field name must have at least 3 characters'],
			maxLength: [100, 'the field name must have a maximun of 100 characters'],
		},
		description: {
			type: String,
			required: true,
			minLength: [2, 'the description field must have at least 3 characters'],
			maxLength: [500, 'the description field must have a maximun of 500 characters']
		},
		category: {
			type: String,
			required: [true, "The field category is required"],
			enum: ["Bebidas", "Golosinas", "Limpieza", "Lacteos", "Otros"],
		},
		price: {
			type: Number,
			required: true,
			min: 0,
			max: 1_000_000,
			default: 0,
		},
		stock: {
			type: Number,
			required: true,
			min: 1,
			max: 1_000_000,
			default: 0,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export const ProductModel = model('Product', productSchema);