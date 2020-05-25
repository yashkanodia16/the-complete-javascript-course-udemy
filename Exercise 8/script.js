class town {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class park extends town {
    constructor(name, buildYear, trees, area) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
    }
    calculateDensity() {
        const density = (this.trees / this.area);
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class street extends town {
    constructor(name, buildYear, length, size=3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    sizeClassify() {
        const classify = new Map();
        classify.set(1, 'tiny');
        classify.set(2, 'small');
        classify.set(3, 'normal');
        classify.set(4, 'big');
        classify.set(5, 'huge');
        console.log(`${this.name} built in ${this.buildYear}, has a ${classify.get(this.size)} street`);
    }

}

const parks = [
    new park('Green Park', 1990, 500, 10),
    new park('National Park', 1995, 1200, 15),
    new park('Oak Park', 1998, 900, 20)];

const streets = [
    new street('Ocean Avenue', 1990, 10, 1),
    new street('Evergreen St', 1990, 20, 4),
    new street('4th Street', 1990, 30, 2),
    new street('Sunset Blvd', 1990, 40)];

function avgPark(arr) {
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    return [sum, sum / arr.length];
}

function avgStreet(arr) {
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('-----------PARKS REPORT------------');
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [total, avg] = avgPark(ages);
    console.log(`Our ${ages.length} parks have an average age of ${avg} years.`);
    const i = p.map(el => el.trees).findIndex(el => el >= 1000);
    p.forEach(el => el.calculateDensity());
    console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(p) {
    console.log('-----------STREETS REPORT------------');
    const street = p.map(el => el.length);
    const [total, avg] = avgStreet(street);
    console.log(`our ${street.length} streets have a  total length of ${total} km, with an average of ${avg} km`);
    p.forEach(el => el.sizeClassify());
}

reportParks(parks);
reportStreets(streets);