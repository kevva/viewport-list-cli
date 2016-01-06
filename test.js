import execa from 'execa';
import test from 'ava';

test('show version', async t => {
	const ret = await execa('./cli.js', ['--version']);
	t.is(require('./package.json').version, ret.stdout);
});

test('show help screen', async t => {
	const ret = await execa('./cli.js', ['--help']);
	t.regexTest(/Return a list of devices and their viewports/, ret.stdout);
});
