const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    datasets: [
        {
            label: 'Gaming Industry',
            data: [0.3, 0.4, 0.6, 1.1, 1.2, 2.3, 2.4, 3.0, 4.0, 4.5, 5.0, 6.0, 7.0, 8.0, 8.6, 9.6, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 28.0, 31.0, 34.0, 38.0, 41.0, 44.0, 47.0, 49.0, 54.0],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            fill: true,
            tension: 0.4
        },
        {
            label: 'Movie Industry',
            data: [2.7, 3.1, 3.3, 3.2, 3.4, 3.5, 3.4, 3.8, 4.1, 4.4, 5.0, 5.3, 5.8, 6.2, 6.4, 6.9, 7.2, 7.5, 7.7, 8.0, 8.5, 8.4, 9.1, 9.2, 9.3, 9.4, 9.8, 9.6, 9.2, 10.6, 10.5, 10.9, 11.0, 10.9, 10.4, 11.1, 11.2, 11.9, 11.3, 10.0],
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            fill: true,
            tension: 0.4
        },
        {
            label: 'Music Industry',
            data: [8.9, 9.3, 9.2, 9.4, 9.8, 10.6, 11.3, 11.8, 12.1, 12.3, 13.7, 14.1, 14.5, 15.0, 15.6, 16.3, 16.7, 16.6, 16.7, 17.3, 18.0, 16.9, 15.0, 13.2, 12.3, 11.5, 10.4, 10.1, 8.5, 7.8, 7.0, 6.9, 7.1, 6.8, 6.9, 7.0, 7.5, 8.0, 9.0, 10.1, 11.1],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: true,
            tension: 0.4
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        animation: {
            duration: 2000,
            easing: 'easeInOutQuad'
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Market Value (in billions USD)'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Growth of Entertainment Media Industries'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    }
};

const myChart = new Chart(ctx, config);

const yearRange = document.getElementById('yearRange');
const yearLabel = document.getElementById('yearLabel');

yearRange.addEventListener('input', function() {
    const yearIndex = parseInt(this.value);
    const years = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    const year = years[yearIndex];

    yearLabel.innerText = year;

    myChart.options.scales.x.min = 0;
    myChart.options.scales.x.max = yearIndex;
    myChart.update();
});
