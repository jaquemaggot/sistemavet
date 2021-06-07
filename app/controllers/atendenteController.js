const atendenteRepository = require('../repository/atendenteRepository');

module.exports ={
    listar,
    inserir,
    deletar,
    atualizar,
    buscarid,
}

async function listar(req,res){
    try{
        const atendentes = await atendenteRepository.listar();
        res.json({message : 'ok', atendentes})
    }catch(error){
        res.status(500).json({error : error.message});
    };
}

async function inserir(req,res){
    try{
      await atendenteRepository.inserir(req.body);
      res.json({message : 'ok'});
    }catch(error){
        res.status(500).json({error : error.message});
    };
}

async function deletar(req,res){
    try{
        await atendenteRepository.deletar(req.params.id);
        res.json({message : 'OK'});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function atualizar(req,res){
    const id = await atendenteRepository.buscarid(req.params.id);
    try{
        if(!id){
            return res.json({message : 'Não existe atendente'});
        }
        await atendenteRepository.atualizar(req.body,req.params.id);
        const retorno = await atendenteRepository.buscarid(req.params.id);
        res.json(retorno[0]);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function buscarid(req,res){
    try{
        return await atendenteRepository.buscarid(req.params.id);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}