const clienteRepository = require('../repository/clienteRepository');

module.exports={
    listar,
    inserir,
    deletar,
    atualizar,
    buscarid
}

async function listar(req,res){
   try{
    const clientes = await clienteRepository.listar();
    res.json({message:'OK', clientes});
   }catch(error){
    res.status(500).json({error: error.message});
   };
}

async function inserir(req,res){
    try{
        await clienteRepository.inserir(req.body);
        res.json({message : 'OK'});
    }catch(error){
        res.status(500).json({error: error.message});
    };
    
}

async function deletar(req,res){
    try{
        await clienteRepository.deletar(req.params.id);
        res.json({message : 'OK'})
    }catch(error){
        res.status(500).json({error: error.message});
    };
}

async function atualizar(req,res){
    const id = await clienteRepository.buscarid(req.params.id);
    try{
        if(!id){
            return res.json({message : 'Não existe cliente'});
        }
        await clienteRepository.atualizar(req.body,req.params.id);
        const retorno = await clienteRepository.buscarid(req.params.id);
        res.json(retorno[0]);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function buscarid(req,res){
    try{
        return await clienteRepository.buscarid(req.params.id);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}