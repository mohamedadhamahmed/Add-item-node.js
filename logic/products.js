
const PRODUCTS=require('../model/products');
module.exports = {
    getproducts: async(req,res,next)=>{
        var url = req.url;
           console.log(url)
        const products=await PRODUCTS.find();
        res.json({
            result:products.map(res=>{
               return{
                   id:res.id,
                   name:res.name,
                   desc:res.desc

               }
            })
        })
},
insertproduct : async(req,res,next)=>{

    var url = req.body;
     console.log(url.name)
     console.log(url.desc)

    const product=await new PRODUCTS(
       {
           name:req.body.name,
           price:req.body.price,
           desc: req.body.desc

        }
 
    ).save()

    res.json({
    "message":'inserted seccessfuly',
    id:product.id,
    name:product.name,
    price:product.price,
    desc:product.desc
})

},

deleteproducts: async (req,res,next)=>{
    const id=req.params.id
const del=await PRODUCTS.findByIdAndDelete(id)
res.json({"delete": del})
}
}