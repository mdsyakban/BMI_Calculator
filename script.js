let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = (document.getElementById('height').value);
    const weight = (document.getElementById('weight').value);
    const result = document.getElementById('output');
    let heightStatus=false, weightStatus=false;

    if(height === '' || (height <= 0)){
        document.getElementById('heightError').innerHTML = 'Tinggi Tidak Boleh Kosong';
    }else{
        document.getElementById('heightError').innerHTML = '';
        heightStatus=true;
    }

    if(weight === '' || (weight <= 0)){
        document.getElementById('weightError').innerHTML = 'Berat Tidak Boleh Kosong';
    }else{
        document.getElementById('weightError').innerHTML = '';
        weightStatus=true;
    }

    if(heightStatus && weightStatus){
        const bmi = (weight / ((height/100)**2)).toFixed(1);

        if(bmi < 18.5){
            result.innerHTML = 'Berat Badan Kurang : ' + bmi;
        }else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML = 'Berat Badan Normal : ' + bmi;
        }else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML = 'Kegemukan : ' + bmi;
        }else{
            result.innerHTML = 'Obesitas : ' + bmi;
        }
    }
});