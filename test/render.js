import domServer from 'react-dom/server';
import sinon from 'sinon';

suite('render-to-static-markup', () => {
    let sandbox;

    setup(() => {
        sandbox = sinon.sandbox.create();

        sandbox.stub(domServer, 'renderToStaticMarkup');
    });

    teardown(() => sandbox.restore());

    test('that rendering works', () => {
        domServer.renderToStaticMarkup();

        sinon.assert.called(domServer.renderToStaticMarkup);
    });
});
