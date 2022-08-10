const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

class CompanyOperations {
	_companies;

	constructor(companies) {
		this._companies = companies;
	}

	printCompanyNames() {
		this._companies.forEach(el => console.log('- ' + el.name));
	}

	getCompanyNameBasedOnStartDate(year) {
		if (typeof year !== 'number') return 'Not a valid year';
		return this._companies
			.filter(el => el.start > year)
			.map(el => el.name)
			.join(', ');
	}

	sortBasedOnEndDate() {
		return this._companies
			.slice()
			.sort((a, b) => a.end - b.end)
			.map(el => `-- ${el.name} : ${el.end}`)
			.join('\n');
	}

	incrementStartOfCategoryByOne(category) {
		if (typeof category !== 'string') return 'Enter a valid category!';
		if (!this._companies.map(el => el.category).includes(category))
			return 'Category not found!';
		return this._companies
			.filter(el => el.category === category)
			.map(el => {
				return {
					...el,
					start: el.start + 1,
				};
			});
	}

	displayInDOMCategory(category, className) {
		const container = document.querySelector(className);
		const company = this.incrementStartOfCategoryByOne(category);
		const markup = company
			.map(
				el =>
					`<div class='company-container'>
                        <p class='company__title'>${el.name}</p>
                        <p class='company__category'>${el.category}</p>
                        <div class='company__year'>
                            <span>${el.start}</span>&nbsp;-&nbsp;
                            <span>${el.end}</span>
                        </div>
                    </div>`
			)
			.join('');
		container.insertAdjacentHTML('afterbegin', markup);
	}

	createNewCompanyObject() {
		return {
			...this._companies[0],
			getCompanyName() {
				return this.name;
			},
		};
	}
}

const companyOperations = new CompanyOperations(companies);

// companyOperations.printCompanyNames();

// console.log(companyOperations.getCompanyNameBasedOnStartDate(1987));

// console.log(companyOperations.sortBasedOnEndDate());

// console.log(companyOperations.incrementStartOfCategoryByOne('Retail'));

// console.log(companyOperations.createNewCompanyObject().getCompanyName());

companyOperations.displayInDOMCategory('Retail', '.container');
