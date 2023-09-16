import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';

console.log('Before');

request('https://www.worldometers.info/coronavirus', cb);

console.log('After');

function cb(error, response, html) {
    if (error) {
        console.error('error:', error);
    } else {
        handlehtml(html);
    }
}

function handlehtml(html) {
    const selTool = cheerio.load(html);
    const contentArr = selTool('#maincounter-wrap span');
    const total = selTool(contentArr[0]).text();
    const deaths = selTool(contentArr[1]).text();
    const recovered = selTool(contentArr[2]).text();

    console.log(chalk.gray(`Total Cases: ${total}`));
    console.log(chalk.red(`Deaths: ${deaths}`));
    console.log(chalk.green(`Recovery: ${recovered}`));
}
