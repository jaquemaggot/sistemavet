const petRepository = require('../repository/petRepository');

module.exports ={
    inserir,
    listar,
    atualizar,
    buscarid,
    deletar
}

async function inserir(req,res){
    try{
        await petRepository.inserir(req.body);
        res.json({message : 'OK'})

    }catch(error){
        res.json(500).json({error : error.message})
    }
}

async function listar(req,res){
    try{
        const pet = await petRepository.listar();
        res.json({message : 'OK', pet})

    }catch(error){
        res.json(500).json({error : error.message})
    }
}


async function deletar(req,res){
    try{
        await petRepository.deletar(req.params.id);
        res.json({message : 'OK'});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function atualizar(req,res){
    const id = await petRepository.buscarid(req.params.id);
    try{
        if(!id){
            return res.json({message : 'Não existe pet'});
        }
        await petRepository.atualizar(req.body,req.params.id);
        const retorno = await petRepository.buscarid(req.params.id);
        res.json(retorno[0]);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function buscarid(req,res){
    try{
        return await petRepository.buscarid(req.params.id);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}