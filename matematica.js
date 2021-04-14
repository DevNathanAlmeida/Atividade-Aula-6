module.exports = (n1,n2,opc) => {
    n1 = parseInt(n1)
    n2 = parseInt(n2)

    if(opc == 'som'){
        return `${n1}+${n2}: ${n1+n2}`
    }

    if(opc == 'sub'){
        return `${n1}-${n2}: ${n1-n2}`
    }

    if(opc == 'div'){
        return `${n1}/${n2}: ${n1/n2}`
    }

    else{
        return `${n1}*${n2}: ${n1*n2}`
    }
}