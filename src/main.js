// import { createClient } from 'http://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
// import { dayNow } from './helpers.js'
const url = "./api/inventory"

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
});


// const supabase = createClient(supabaseUrl, supabaseKey)

// const enviar = document.getElementById("enviar")
// enviar.addEventListener("click", async () => {

//     const file = document.getElementById("input-btn").files[0]

//     if(!file){
//         alert("Nenhum arquivo selecionado")
//         return
//     }

//     const nameSanitized = file.name.replace(/\s+/g, "_")

//     const nameFile = `${dayNow()}-${nameSanitized}`

//     //upload do arquivo para o supabase
//     const { data, error } = await supabase.storage.from("uploads").upload(nameFile, file)

//     if(error){
//         console.error("Erro ao enviar o arquivo:", error)
//         return
//     }

//     //salvar registro do arquivo no banco de dados
//     const { error: dbError } = await supabase.from("arquivos").insert({ name_file: nameFile, caminho: data.path })

//     alert("Arquivo enviado com sucesso!")
// })