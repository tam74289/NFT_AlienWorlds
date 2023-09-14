var DomainWAX = ['HTTPS://WAX.PINK.GG', 'HTTPS://WAX.DAPPLICA.IO', 'HTTPS://CHAIN.WAX.IO'];
var randomDomainwax = DomainWAX[Math.floor(Math.random() * DomainWAX.length)];
var atomic_api = [
   // 'https://wax-atomic.wizardsguild.one', 
   // 'https://api.wax-aa.bountyblok.io',
   // 'https://aa.wax.blacklusion.io',
	'https://wax.api.atomicassets.io',
//	'https://wax3.api.atomicassets.io'
]
var randomatomic_api = atomic_api[Math.floor(Math.random() * atomic_api.length)];
class bot {

    delay = (millis) =>
        new Promise((resolve, reject) => {
            setTimeout((_) => resolve(), millis);
        });

    isEmptyObject(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }

    async postData(url = '', data = {}, method = 'POST', header = { 'Content-Type': 'application/json' }, returnMode = 'json') {
        try {
            // Object.assign(header,{'pragma':'no-cache' ,'cache-control':'no-cache'})
            const init = (method == 'POST') ? { method: method, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', headers: header, redirect: 'follow', referrerPolicy: 'no-referrer', body: JSON.stringify(data) } : { method: method, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', headers: header, redirect: 'follow', referrerPolicy: 'no-referrer' }
            if (returnMode == 'json') {
                const response = await fetch(url, init);
                return response.json(); // parses JSON response into native JavaScript objects
            } else {
                const response = await fetch(url, init).then(function(response) {
                        if (response.ok) {
                            return response.text();
                        }

                        throw new Error('Something went wrong.');
                    })
                    .then(function(text) {
                        console.log('Request successful', text);
                        return text;
                    })
                    .catch(function(error) {
                        console.log('Request failed', error);
                        return '';
                    });

                return response
            }
        } catch (err) {
            console.log(`Error:${err.message}`)
            return false;
        }
    }

    async checkALL() {
		console.log('CheckNew !!')
        await this.WaxNew();
        await this.delay(1000);
        this.nfts();
        await this.delay(1000);
        this.nfts1();
        await this.delay(1000);
        this.nfts2();
        await this.delay(1000);
        this.nfts3();
        await this.delay(1000);
        this.nfts4();
        await this.delay(1000);
        this.nfts5();
        await this.delay(1000);
        this.nfts6();
        await this.delay(1000);
        this.nfts7();
        await this.delay(1000);
        this.nfts8();
        await this.delay(1000);
        this.nfts9();
    }

    async checkmore() {
        await this.delay(2000);
        this.nfts10();
        await this.delay(2000);
        this.nfts11();
        await this.delay(2000);
        this.nfts12();
        await this.delay(2000);
        this.nfts13();
        await this.delay(2000);
        this.nfts14();
        await this.delay(2000);
        this.nfts15();
        await this.delay(2000);
        this.nfts16();
        await this.delay(2000);
        this.nfts17();
        await this.delay(2000);
        this.nfts18();
        await this.delay(2000);
        this.nfts19();
        await this.delay(2000);
        this.nfts20();
        await this.delay(2000);
        this.nfts21();
        await this.delay(2000);
        this.nfts22();
		 await this.delay(2000);
        this.nfts23();
        await this.delay(2000);
        this.nfts24();
        await this.delay(2000);
        this.nfts25();
        await this.delay(2000);
        this.nfts26();
        await this.delay(2000);
        this.nfts27();
        await this.delay(2000);
        this.nfts28();
        await this.delay(2000);
        this.nfts29();
 }

    async nfts() {
		try {
        let tempid = "56039"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts()
        throw error;
    }
    }

    async nfts1() {
		try {
        let tempid = "48154"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts1()
        throw error;
    }
    }

    async nfts2() {
		try {
        let tempid = "19560"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts2()
        throw error;
    }
    }


    async nfts3() {
		try {
        let tempid = "19553"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts3()
        throw error;
    }
    }



    async nfts4() {
		try {
        let tempid = "19554"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts4()
        throw error;
    }
    }



    async nfts5() {
		try {
        let tempid = "19561"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts5()
        throw error;
    }
    }


    async nfts6() {
		try {
        let tempid = "19559"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts6()
        throw error;
    }
    }


    async nfts7() {
		try {
        let tempid = "19556"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts7()
        throw error;
    }
    }


    async nfts8() {
		try {
        let tempid = "19555"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts8()
        throw error;
    }
    }

    async nfts9() {
		try {
        let tempid = "19557"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts9()
        throw error;
    }
    }
	
	    async nfts10() {
			try {
        let tempid = "19562"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts10()
        throw error;
    }
    }


    async nfts11() {
		try {
        let tempid = "19563"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts11()
        throw error;
    }
    }



    async nfts12() {
		try {
        let tempid = "19564"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts12()
        throw error;
    }
    }



    async nfts13() {
		try {
        let tempid = "19565"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts13()
        throw error;
    }
    }


    async nfts14() {
		try {
        let tempid = "19566"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts14()
        throw error;
    }
    }
	
	
	    async nfts15() {
			try {
        let tempid = "19567"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts15()
        throw error;
    }
    }
	
	
	
	    async nfts16() {
			try {
        let tempid = "19568"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts16()
        throw error;
    }
    }
	
	
	
	    async nfts17() {
			try {
        let tempid = "19569"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts17()
        throw error;
    }
    }
	
	
	
	    async nfts18() {
			try {
        let tempid = "19570"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts18()
        throw error;
    }
    }
	
	
	    async nfts19() {
			try {
        let tempid = "19571"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts19()
        throw error;
    }
    }
	
	
	
	    async nfts20() {
			try {
        let tempid = "19572"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts20()
        throw error;
    }
    }

	    async nfts21() {
			try {
        let tempid = "19573"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts21()
        throw error;
    }
    }
	
	
		    async nfts22() {
				try {
        let tempid = "19574"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts22()
        throw error;
    }
    }
	
		async nfts23() {
			try {
        let tempid = "19575"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts23()
        throw error;
    }
    }
	
		async nfts24() {
			try {
        let tempid = "19576"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts24()
        throw error;
    }
    }
	
		async nfts25() {
			try {
        let tempid = "19577"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts25()
        throw error;
    }
    }
	
			async nfts26() {
				try {
        let tempid = "19578"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts26()
        throw error;
    }
    }
	
	
		async nfts27() {
			try {
        let tempid = "19579"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
        throw error;
		await this.delay(5000);
		this.nfts27()
    }
    }
	
	
			async nfts28() {
				try {
        let tempid = "19580"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
        throw error;
		await this.delay(5000);
		this.nfts28()
    }
    }
	
		async nfts29() {
			try {
        let tempid = "19581"
        let wax = document.getElementById('text-wax').innerHTML
        let accountDetailz = await fetch(randomatomic_api + "/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=" + tempid + "&collection_name=alien.worlds", { "method": "GET" })
        let accountDetail = await accountDetailz.json();
        if (accountDetail) {
            for (let token of accountDetail.data) {
                let price = (token.price.amount / 100000000)
                let pricebath = (token.price.amount / 100000000 * wax)
                document.getElementById("text-" + tempid).innerHTML = "" + parseFloat(price).toFixed(2) + " WAX"
                document.getElementById("text-baht-" + tempid).innerHTML = "" + parseFloat(pricebath).toFixed(2) + " บาท"
            }
        }
				        return 0;
    } catch (error) {
        console.log("Error : Atomic");
		await this.delay(5000);
		this.nfts29()
        throw error;
    }
    }
	
	    async timeupdate() {
        const dateNow = moment().format('dddd DD MMMM YYYY  HH:mm ');
		document.getElementById("text-update").innerHTML = dateNow + "น."
   
		
    }
	
    UpdateWax() {
        console.log('UpdateWax')
        clearInterval(this.autoupdate);
         this.autoupdate = setInterval(function() {
             var newBot = new bot()
             newBot.checkALL();
         }, 120000);
    }
    async WaxNew() {
        let accountDetail = await this.postData("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=2300,9119&convert_id=2809", {}, 'GET')
        if (accountDetail) {
			console.log('WaxNew')
            let balanceWax = accountDetail.data[2300].quote[2809].price.toFixed(2)
            document.getElementById("text-wax").innerHTML = balanceWax
			let balanceTLM = accountDetail.data[9119].quote[2809].price.toFixed(2)
            document.getElementById("text-tlm").innerHTML = balanceTLM
			let RateWaxTLM = parseFloat(balanceTLM / balanceWax).toFixed(2)
			let RateWaxWAX = parseFloat(balanceWax / balanceTLM).toFixed(2)
			document.getElementById("text-ex-tlm").innerHTML = +parseFloat(RateWaxTLM).toFixed(2)
			document.getElementById("text-ex-wax").innerHTML = +parseFloat(RateWaxWAX).toFixed(2)
			this.timeupdate();
        }
    }
}
