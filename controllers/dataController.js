const { DataModel } = require("../database/models");

const getData =async (req, res) => {
    try{
       const allData= await DataModel.find();
       if(!allData || allData.length===0){
       return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
       }

       return res.status(200).json({
        success:true,
        data:allData
       })
    }
    catch(err){
        return res.status(500).json({
          success:false,
          message: "Internal Server Error",
        })
    }
  };

  const filterByYear=async(req,res)=>{
    try{
      const {year}=req.params;
      if(year.length!== 4){
        return res.status(400).json({
          success:false,
          message:'Invalid Year'
        })
      }
      const filteredData=await DataModel.find({
        $or:[{start_year:year},{end_year:year},{published:{$regex:year,$options:'im'}},{added:{$regex:year,$options:'im'}}]
      });
      if(filteredData.length===0){
        return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
      }
      return res.status(200).json({
        success:true,
        data:filteredData
      })
    }
    catch(err){
    return res.status(500).json({
      success:false,
      message: "Internal Server Error",
    })
    }
  }
  const filterByTopic=async(req,res)=>{
    try{
      const {topic}=req.params;
      if(topic.length<3){
        return res.status(400).json({
          success:false,
          message:'Invalid Topic'
        })
      }
      const filteredData=await DataModel.find({
      topic:{$regex:topic,$options:"im"}
      });
      if(filteredData.length===0){
        return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
      }
      return res.status(200).json({
        success:true,
        data:filteredData
      })
    }
    catch(err){
    return res.status(500).json({
      success:false,
      message: "Internal Server Error",
    })
    }
  }
  const filterByTitle=async(req,res)=>{
    try{
      const {title}=req.params;
      if(title.length<3){
        return res.status(400).json({
          success:false,
          message:'Invalid Title'
        })
      }
      const filteredData=await DataModel.find({
      title:{$regex:title,$options:"im"}
      });
      if(filteredData.length===0){
        return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
      }
      return res.status(200).json({
        success:true,
        data:filteredData
      })
    }
    catch(err){
    return res.status(500).json({
      success:false,
      message: "Internal Server Error",
    })
    }
  }
  const filterBySector=async(req,res)=>{
    try{
      const {sector}=req.params;
      if(sector.length<3){
        return res.status(400).json({
          success:false,
          message:'Invalid sector'
        })
      }
      const filteredData=await DataModel.find({
        sector:{$regex:sector,$options:"im"}
      });
      if(filteredData.length===0){
        return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
      }
      return res.status(200).json({
        success:true,
        data:filteredData
      })
    }
    catch(err){
    return res.status(500).json({
      success:false,
      message: "Internal Server Error",
    })
    }
  }
  const filterByRegion=async(req,res)=>{
    try{
      const {region}=req.params;
      if(region.length<3){
        return res.status(400).json({
          success:false,
          message:'Invalid Region'
        })
      }
      const filteredData=await DataModel.find({
      region:{$regex:region,$options:"im"}
      });
      if(filteredData.length===0){
        return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
      }
      return res.status(200).json({
        success:true,
        data:filteredData
      })
    }
    catch(err){
    return res.status(500).json({
      success:false,
      message: "Internal Server Error",
    })
    }
  }
  const filterByCountry=async(req,res)=>{
    try{
      const {country}=req.params;
      if(country.length<3){
        return res.status(400).json({
          success:false,
          message:'Invalid Country'
        })
      }
      const filteredData=await DataModel.find({
      country:{$regex:country,$options:"im"}
      });
      if(filteredData.length===0){
        return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
      }
      return res.status(200).json({
        success:true,
        data:filteredData
      })
    }
    catch(err){
    return res.status(500).json({
      success:false,
      message: "Internal Server Error",
    })
    }
  }
  const filterByPestle=async(req,res)=>{
    try{
      const {pestle}=req.params;
      if(pestle.length<3){
        return res.status(400).json({
          success:false,
          message:'Invalid Pestle'
        })
      }
      const filteredData=await DataModel.find({
      pestle:{$regex:pestle,$options:"im"}
      });
      if(filteredData.length===0){
        return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
      }
      return res.status(200).json({
        success:true,
        data:filteredData
      })
    }
    catch(err){
    return res.status(500).json({
      success:false,
      message: "Internal Server Error",
    })
    }
  }
  const filterBySource=async(req,res)=>{
    try{
      const {source}=req.params;
      if(source.length<3){
        return res.status(400).json({
          success:false,
          message:'Invalid Source'
        })
      }
      const filteredData=await DataModel.find({
      source:{$regex:source,$options:"im"}
      });
      if(filteredData.length===0){
        return res.status(400).json({
          success:false,
          message:"No Data Found"
        })
      }
      return res.status(200).json({
        success:true,
        data:filteredData
      })
    }
    catch(err){
    return res.status(500).json({
      success:false,
      message: "Internal Server Error",
    })
    }
  }
  const filterByIntensity=async(req,res)=>{
    try {
      const { intensity } = req.params;
      const data = await DataModel.find({ intensity: parseInt(intensity) });
      if (!data || data.length === 0) {
          return res.status(400).json({
              success: false,
              message: "No Data Found",
          })
      }
      return res.status(200).json({
          success: true,
          message: `Filtered by intensity: ${intensity}`,
          data: data
      })
  } catch (e) {
      return res.status(500).json({
          success: false,
          message: "Internal Server Error",
      })
  }
  }
  const filterByLikelyhood=async(req,res)=>{
    try {
      const { likelihood } = req.params;
      const data = await DataModel.find({ likelihood: parseInt(likelihood) });
      if (!data || data.length === 0) {
          return res.status(400).json({
              success: false,
              message: "No Data Found",
          })
      }
      return res.status(200).json({
          success: true,
          message: `Filtered by likelihood: ${likelihood}`,
          data: data
      })
  } catch (e) {
    console.log(e)
      return res.status(500).json({
          success: false,
          message: "Internal Server Error",
      })
  }
  }
  const filteredByAny = async (req, res) => {
    try {
        const { search } = req.params;
        if (search.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid search",
            })
        }
        const allData = await DataModel.find({
            $or: [{ sector: { $regex: search, $options: 'i' } }, { topic: { $regex: search, $options: 'i' } },
            { insight: { $regex: search, $options: 'i' } }, { title: { $regex: search, $options: 'i' } },
            { pestle: { $regex: search, $options: 'i' } }, { source: { $regex: search, $options: 'i' } },
            { url: { $regex: search, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by search ${search}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}
  
  module.exports = { getData,filterByYear,filterByTopic,filterByTitle,filterByCountry,filterByRegion,filterBySector,filterByPestle,filterBySource,filterByIntensity,filterByLikelyhood,filteredByAny };