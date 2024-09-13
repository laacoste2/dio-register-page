import {Column, Container, SubtitleRegister, Title, TitleRegister, Wrapper, Row, TenhoContaText, FazerLoginText} from "./styles"
import { MdEmail, MdLock, MdPerson} from 'react-icons/md'
import { Header } from '../../components/Header';
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form";
import { useNavigate  } from "react-router-dom";
import { api } from "../../services/api"
import { Button } from "../../components/Button"

const Register = () =>{
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        const { data } = await api.get('/users')
        let dataId = data.length + 1;

        await api.post('/users', {
            id: dataId,
            name: formData.nome_completo,
            email: formData.email,
            senha: formData.password
        }).then((response) => {
            if(response.status === 201){
                navigate('../login')
            }
        });
    };

    const handleFazerLoginClick = () => {
        navigate('../login')
    }

    return(<>
        <Header/>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                     e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegister>Comece agora grátis</TitleRegister>
                    <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" leftIcon={<MdPerson color="#8647AD"/>} name="nome_completo" control={control}/>
                        {errors.nome_completo && <span>Nome completo é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD"/>} name="email" control={control}/>
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input placeholder="Password" leftIcon={<MdLock color="#8647AD"/>} name="password" control={control}/>
                        {errors.password && <span>Password é obrigatório</span>}
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <SubtitleRegister>Ao clicar em "criar minha conta grátis",
                             declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubtitleRegister>
                    </Row>
                    <TenhoContaText>Já tenho conta. <FazerLoginText onClick={handleFazerLoginClick }>Fazer login</FazerLoginText></TenhoContaText>
                </Wrapper>

            </Column>
        </Container>
    </>
    )
}

export {Register}