import { createClient } from 'http://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { dayNow } from './helpers.js'

const supabaseUrl = 'https://enuxwaroocxloprjoxpu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVudXh3YXJvb2N4bG9wcmpveHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyOTczNDIsImV4cCI6MjA5Mzg3MzM0Mn0.B3myhPKHl_HZjdmBx2U-unAiYFoTewUwpE3NwysK_2Y'

const supabase = createClient(supabaseUrl, supabaseKey)

const enviar = document.getElementById("enviar")
enviar.addEventListener("click", async () => {

    const file = document.getElementById("input-btn").files[0]

    if(!file){
        alert("Nenhum arquivo selecionado")
        return
    }

    const nameSanitized = file.name.replace(/\s+/g, "_")

    const nameFile = `${dayNow()}-${nameSanitized}`

    //upload do arquivo para o supabase
    const { data, error } = await supabase.storage.from("uploads").upload(nameFile, file)

    if(error){
        console.error("Erro ao enviar o arquivo:", error)
        return
    }

    //salvar registro do arquivo no banco de dados
    const { error: dbError } = await supabase.from("arquivos").insert({ name_file: nameFile, caminho: data.path })

    alert("Arquivo enviado com sucesso!")
})