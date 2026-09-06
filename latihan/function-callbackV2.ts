function welcomeAllStudent(
    studentNames: string[]
    ,callback: (name:string)=> void
):void{
    console.log(`Mengirim Pesan ke ${studentNames.length} siswa...`)
    studentNames.forEach((name)=>{
        callback(name);});
}

function menyapaStudent(nama:string):void{
    console.log(`Hallo ${nama} Selamat Datang`)
}
welcomeAllStudent(["Marco","Mishbah","Romi",],menyapaStudent); 