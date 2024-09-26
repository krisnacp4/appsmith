export default {
	datas: mockPOList.data.data,
	productStatusList: [
		"New PO",
		"Waiting for Client",
		"Payment Confirmed",
		"New Brand Certification",
		"Waiting for Disburse",
		"RPlus Disbursement",
		"Mass Production",
		"Distribution"
	],
	myMap:[],
	createdPokemon:{
		"name":"",
		"stats":""
	},
	mapPOList () {
		return this.myMap = this.datas.map(data=> {
			return {
				"po_name": data.purchase_order_name,
				"po_amount": data.grand_total,
				"deal_name":data.deal.deal_name,
				"company_name":data.company.name,
				"product_type":data.product_type,
				"due_date":data.created_at,
				"status":data.status,
				"current_pic":data.current_pic_name,
				"po_owner":data.purchase_order_owner
			}
		})
	},
	filterByPOName(poName) {
		if (poName) {
			return this.myMap = this.myMap.filter(data => data.po_name.includes(poName))
		}
		this.mapPOList ()
		return poName
	},
	filterByProductType(productType) {
		if (productType.length>0) {
			this.mapPOList ()
			return this.myMap = this.myMap.filter(data => data.product_type === productType)
		}
		this.mapPOList ()
		return productType
	},
	filterByProductStatus(productStatus) {
		if (productStatus.length>0) {
			this.mapPOList ()
			return this.myMap = this.myMap.filter((data) => {
				for(let i=0;i<productStatus.length;i=i+1) {
					console.log(i)
					if(data.status.includes(productStatus[i])) {
						return true
					}
				}
			})
		}
		this.mapPOList ()
		return productStatus
	},
	createPokemonNUploadFile() {
		let name = pokemonName.text
		let stats = pokemonStats.text
		console.log(this.createdPokemon)
		// rll_confidential_data.run()
		return this.createdPokemon = {...this.createdPokemon, "name":name, "stats":stats}
	},
	mapColor (fieldValue) {
		console.log(fieldValue)
		let color = "#fff";
		if(fieldValue ==="New PO") color = "#FFB3BA";
		if(fieldValue ==="Waiting for Client") return color = "#FFDFBA";
		if(fieldValue ==="Payment Confirmed") return color = "#FFFFBA";
		if(fieldValue ==="New Brand Certification") return color = "#BAFFC9";
		if(fieldValue ==="Waiting for Disburse") return color = "#BAE1FF";
		if(fieldValue ==="RPlus Disbursement") color = "#C2C2FF";
		if(fieldValue ==="Mass Production") return color = "#FFCCE5";
		if(fieldValue ==="Distribution") return color = "#D9EAD3";

		return color;
	}
}