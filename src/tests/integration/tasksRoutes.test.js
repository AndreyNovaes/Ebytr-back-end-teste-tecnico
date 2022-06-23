const chai = require('chai');

const { expect } = chai;

describe('route HTTP GET /tasks', () => {
    describe('should return all tasks in the database', () => {
        let response;

        before(async () => {
            response = await minhaRequisicao();
        });

        it(
            'A requisição GET para a rota traz uma lista inicial ' +
            'contendo dois registros de pessoas usuárias',
            () => {
              expect(response.body).to.have.length(2);
            }
        );

        it('Essa requisição deve retornar código de status 200', () => {
            expect(response).to.have.status(200);
        });
    });
});