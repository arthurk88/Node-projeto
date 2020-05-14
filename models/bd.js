const conn = require('./connect');
const Sequelize = require('sequelize');

// MODULOS E CRIAÇÂO DE BANDO

const Users = conn.sequelize.define('PESSOAS',{

    IDPESSOA:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MATRICULA:{
        type: Sequelize.INTEGER
    },
    EMPRESA:{
        type: Sequelize.INTEGER
    },
    NOME:{
        type: Sequelize.STRING(50)
    },
    NASCIMENTO:{
        type: Sequelize.DATE
    },
    CPF:{
        type: Sequelize.INTEGER(11)
    },
    SEXO:{
        type: Sequelize.BOOLEAN
    },
    FOTO:{
        type: Sequelize.BLOB('long')
    },
    EMAIL:{
        type: Sequelize.STRING(50)
    },
    ENDENRECO:{
        type: Sequelize.INTEGER
    },
    TELEFONE:{
        type: Sequelize.INTEGER(1)
    },
    ADMISSAO:{
        type: Sequelize.DATE
    },
    NIVEL:{
        type: Sequelize.STRING(20)
    },
    TIPOATENDIMENTO:{
        type: Sequelize.INTEGER
    },
    LOGIN:{
        type: Sequelize.STRING(50)
    },
    SENHA:{
        type: Sequelize.STRING(50)
    },
    ATIVO:{
        type: Sequelize.BOOLEAN
    }
})
const Addresses = conn.sequelize.define('ENDERECOS',{
    IDENDERECO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RUA:{
        type: Sequelize.STRING
    },
    NUMERO:{
        type: Sequelize.INTEGER
    },
    BAIRRO:{
        type: Sequelize.STRING(50)
    },
    CIDADE:{
        type: Sequelize.STRING(50)
    },
    ESTADO:{
        type: Sequelize.STRING(2)
    },
    CEP:{
        type: Sequelize.INTEGER(8)
    },
    PAIS:{
        type: Sequelize.STRING
    },
    COMPLEMENTO:{
        type: Sequelize.STRING
    }
})
const Logs = conn.sequelize.define('LOGS',{
    IDLOG:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IDPESSOA:{
        type: Sequelize.INTEGER
    },
    ACAO:{
        type: Sequelize.STRING
    }
})
const Companies = conn.sequelize.define('EMPRESAS',{
    IDEMPRESAS:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MATRIZ:{
        type: Sequelize.STRING,
    },
    RAZAO:{
        type: Sequelize.STRING,
    },
    NOMEEMPRESA:{
        type: Sequelize.STRING,
    },
    CNPJ:{
        type: Sequelize.INTEGER,
    },
    LOGO:{
        type: Sequelize.BLOB('long'),
    },
    IDENDERECO:{
        type: Sequelize.INTEGER,
    },
    TELEFONE:{
        type: Sequelize.INTEGER,
    },
    TELEFONE2:{
        type: Sequelize.INTEGER,
    },
    SERVICO:{
        type: Sequelize.STRING,
    },
    CONFIG:{
        type: Sequelize.STRING,
    },
    LICENSA:{
        type: Sequelize.STRING,
    },
})
const Services = conn.sequelize.define('SERVICOS',{

    IDSERVICO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TIPO:{
        type: Sequelize.INTEGER,
    }

})
const Configs = conn.sequelize.define('CONFIGURACOES',{

    IDCONFIG:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IDIOMA:{
        type: Sequelize.STRING,
    },
    CORES:{
        type: Sequelize.STRING,
    },
    REDES:{
        type: Sequelize.STRING,
    }

})
const Typeattendances = conn.sequelize.define('TIPOATENDIMENTOS',{

    IDTIPOATENDIMENTO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MODELO:{
        type: Sequelize.STRING,
    },

})
const Contacts = conn.sequelize.define('CONTATOS',{

    IDCONTATO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    EMPRESA:{
        type: Sequelize.INTEGER,
    },
    NOME:{
        type: Sequelize.STRING,
    },
    EMAIL:{
        type: Sequelize.STRING,
    }, 
    FONE:{
        type: Sequelize.STRING,
    }, 
    ASSUNTO:{
        type: Sequelize.STRING,
    }, 
    MESSAGEM:{
        type: Sequelize.STRING,
    }, 

})
const Clients = conn.sequelize.define('CLIENTES',{

    IDCLIENTE:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    EMPRESA:{
        type: Sequelize.INTEGER,
    },
    NOME:{
        type: Sequelize.STRING,
    },
    CPF:{
        type: Sequelize.INTEGER(11),
    }, 
    NASCIMENTO:{
        type: Sequelize.DATE,
    }, 
    ENDEREÇO:{
        type: Sequelize.INTEGER,
    }, 
    TELEFONE:{
        type: Sequelize.INTEGER,
    }, 
    EMAIL:{
        type: Sequelize.STRING(50),
    }, 
    FOTO:{
        type: Sequelize.BLOB('long'),
    }, 
})
const Reports = conn.sequelize.define('RELATORIOS',{

    IDRELATORIO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NOME:{
        type: Sequelize.STRING,
    }
})
const historic = conn.sequelize.define('HISTORICOS',{

    IDHISTORICO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IDSERVICO:{
        type: Sequelize.STRING,
    },
    IDTIPOATENDIMENTO:{
        type: Sequelize.STRING,
    },
    IDUSUARIO:{
        type: Sequelize.STRING, 
    },
    ATENDENTE:{
        type: Sequelize.STRING,
    },
    IDATENDIMENTO:{
        type: Sequelize.STRING,
    }
})
const attendances = conn.sequelize.define('ATENDIMENTOS',{

    IDATENDIMENTO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IDCLIENTE:{
        type: Sequelize.STRING,
    },
    IDATENDENTE:{
        type: Sequelize.STRING,
    },
    ATENDIDOPOR:{
        type: Sequelize.STRING,
    },
    IDEMPRESA:{
        type: Sequelize.STRING,
    },
    VALOR:{
        type: Sequelize.FLOAT,
    },
    STATUS:{
        type: Sequelize.STRING,
    },
    DESCRICAO:{
        type: Sequelize.STRING,
    },
    IDHISTORICO:{
        type: Sequelize.STRING,
    }

})

Users.sync().then(() => console.log("Database is ready"))
Addresses.sync().then(() => console.log("Database is ready"))
Logs.sync().then(() => console.log("Database is ready"))
Companies.sync().then(() => console.log("Database is ready"))
Services.sync().then(() => console.log("Database is ready"))
Configs.sync().then(() => console.log("Database is ready"))
Typeattendances.sync().then(() => console.log("Database is ready"))
Contacts.sync().then(() => console.log("Database is ready"))
Clients.sync().then(() => console.log("Database is ready"))
Reports.sync().then(() => console.log("Database is ready"))
historic.sync().then(() => console.log("Database is ready"))
attendances.sync().then(() => console.log("Database is ready")) 

//sync({force:true});

module.exports = {
    Users:Users,
    Addresses:Addresses,
    Logs:Logs,
    Companies:Companies,
    Services:Services,
    Configs:Configs,
    Typeattendances:Typeattendances,
    Contacts:Contacts,
    Clients:Clients,
    Reports:Reports,
    historic:historic,
    attendances:attendances,
 } 


// DROP TABLE IF EXISTS pessoas;
// DROP TABLE IF EXISTS logs;
// DROP TABLE IF EXISTS historicos;
// DROP TABLE IF EXISTS enderecos;
// DROP TABLE IF EXISTS empresas;
// DROP TABLE IF EXISTS contatos;
// DROP TABLE IF EXISTS configuracoes;
// DROP TABLE IF EXISTS clientes;
// DROP TABLE IF EXISTS atendimentos;
// DROP TABLE IF EXISTS accounts;
// DROP TABLE IF EXISTS relatorios;
// DROP TABLE IF EXISTS servicos;
// DROP TABLE IF EXISTS tipoatendimentos;