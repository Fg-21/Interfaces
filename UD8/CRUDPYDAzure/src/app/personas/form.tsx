import { Departamento } from '@/src/domain/entities/Departamento';
import { Picker } from '@react-native-picker/picker';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import container from '../../core/Container';
import PersonasVM from '../../ui/vms/PersonasVM';
import { PersonasStackParamList } from './_layout';

type PersonasFormNavigationProp = NativeStackNavigationProp<
    PersonasStackParamList,
    'PersonasForm'
>;

type PersonasFormRouteProp = RouteProp<PersonasStackParamList, 'PersonasForm'>;

const PersonasFormScreen = observer(() => {
    const viewModel = container.get<PersonasVM>('PersonasVM');
    const navigation = useNavigation<PersonasFormNavigationProp>();
    const route = useRoute<PersonasFormRouteProp>();

    const personaId = route.params?.personaId;
    const isEditMode = personaId !== undefined;

    useEffect(() => {
        if (isEditMode) {
            viewModel.navigateToEdit(personaId);
        } else {
            viewModel.navigateToCreate();
        }
    }, [personaId]);

    const handleSave = async () => {
        const success = await viewModel.savePersona();
        if (success) {
            navigation.goBack()
        }
    };

    if (viewModel.isLoading && viewModel.personaWithDepa === null) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#03dac6" />
                <Text style={styles.loadingText}>
                    {isEditMode ? 'Cargando persona...' : 'Cargando departamentos...'}
                </Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    {isEditMode ? 'Editar Persona' : 'Nueva Persona'}
                </Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.form}>
                    {viewModel.error && (
                        <View style={styles.errorContainer}>
                            <Icon name="error-outline" size={20} color="#c62828" />
                            <Text style={styles.errorText}>{viewModel.error}</Text>
                        </View>
                    )}

                    {/* Nombre */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nombre *</Text>
                        <TextInput
                            style={[
                                styles.input,
                                viewModel.formErrors.nombre && styles.inputError,
                            ]}
                            placeholder="Ingrese el nombre"
                            value={viewModel.formNombre}
                            onChangeText={(text) => viewModel.setFormNombre(text)}
                            editable={!viewModel.isLoading}
                        />
                        {viewModel.formErrors.nombre && (
                            <Text style={styles.errorFieldText}>
                                {viewModel.formErrors.nombre}
                            </Text>
                        )}
                    </View>

                    {/* Apellidos */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Apellidos *</Text>
                        <TextInput
                            style={[
                                styles.input,
                                viewModel.formErrors.apellidos && styles.inputError,
                            ]}
                            placeholder="Ingrese los apellidos"
                            value={viewModel.formApellidos}
                            onChangeText={(text) => viewModel.setFormApellidos(text)}
                            editable={!viewModel.isLoading}
                        />
                        {viewModel.formErrors.apellidos && (
                            <Text style={styles.errorFieldText}>
                                {viewModel.formErrors.apellidos}
                            </Text>
                        )}
                    </View>

                    {/* Teléfono */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Teléfono *</Text>
                        <TextInput
                            style={[
                                styles.input,
                                viewModel.formErrors.telefono && styles.inputError,
                            ]}
                            placeholder="Ingrese el teléfono"
                            value={viewModel.formTelefono}
                            onChangeText={(text) => viewModel.setFormTelefono(text)}
                            keyboardType="phone-pad"
                            editable={!viewModel.isLoading}
                        />
                        {viewModel.formErrors.telefono && (
                            <Text style={styles.errorFieldText}>
                                {viewModel.formErrors.telefono}
                            </Text>
                        )}
                    </View>
                    <Text style={styles.helperText}>
                            Tiene que ser un telefono español valido (Empezar por 6 o 7): ejemplo 654987321 o 789465132
                        </Text>

                    {/* Dirección */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Dirección *</Text>
                        <TextInput
                            style={[
                                styles.input,
                                styles.textArea,
                                viewModel.formErrors.direccion && styles.inputError,
                            ]}
                            placeholder="Ingrese la dirección"
                            value={viewModel.formDireccion}
                            onChangeText={(text) => viewModel.setFormDireccion(text)}
                            multiline
                            numberOfLines={3}
                            editable={!viewModel.isLoading}
                        />
                        {viewModel.formErrors.direccion && (
                            <Text style={styles.errorFieldText}>
                                {viewModel.formErrors.direccion}
                            </Text>
                        )}
                    </View>

                    {/* Foto URL */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>URL de Foto</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="https://ejemplo.com/foto.jpg"
                            value={viewModel.formFoto}
                            onChangeText={(text) => viewModel.setFormFoto(text)}
                            editable={!viewModel.isLoading}
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Fecha de Nacimiento */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Fecha de Nacimiento *</Text>
                        <View style={styles.dateInputContainer}>
                            <Icon name="calendar-today" size={20} color="#666" style={styles.dateIcon} />
                            <TextInput
                                style={[
                                    styles.dateInput,
                                    viewModel.formErrors.fecha && styles.inputError,
                                ]}
                                placeholder="YYYY-MM-DD (ej: 2000-01-15)"
                                value={viewModel.formFecha}
                                onChangeText={(text) => viewModel.setFormFecha(text)}
                                editable={!viewModel.isLoading}
                                keyboardType="numbers-and-punctuation"
                                maxLength={30}
                            />
                        </View>
                        <Text style={styles.helperText}>
                            Formato: Año-Mes-Día (YYYY-MM-DD)
                        </Text>
                        {viewModel.formErrors.fecha && (
                            <Text style={styles.errorFieldText}>
                                {viewModel.formErrors.fecha}
                            </Text>
                        )}
                        {viewModel.formFecha && !viewModel.formErrors.fecha && (
                            <View style={styles.dateInfo}>
                                {viewModel.isMayorDeEdad() ? (
                                    <View style={styles.infoRow}>
                                        <Icon name="check-circle" size={16} color="#2e7d32" />
                                        <Text style={styles.validText}>Mayor de edad</Text>
                                    </View>
                                ) : (
                                    <View style={styles.infoRow}>
                                        <Icon name="cancel" size={16} color="#c62828" />
                                        <Text style={styles.invalidText}>Menor de edad</Text>
                                    </View>
                                )}
                                {viewModel.isFechaSunday() && (
                                    <View style={styles.infoRow}>
                                        <Icon name="wb-sunny" size={16} color="#1976d2" />
                                        <Text style={styles.infoText}>Nació en domingo</Text>
                                    </View>
                                )}
                            </View>
                        )}
                    </View>

                    {/* Departamento */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Departamento *</Text>
                        <View
                            style={[
                                styles.pickerContainer,
                                viewModel.formErrors.departamento && styles.inputError,
                            ]}
                        >
                            <Picker
                                selectedValue={viewModel.formIdDepartamento}
                                onValueChange={(value) => viewModel.setFormIdDepartamento(value)}
                                enabled={!viewModel.isLoading}
                            >
                                <Picker.Item label="Seleccione un departamento" value={0} />
                                {viewModel.departamentosDisponibles.map((depto: Departamento) => (
                                    <Picker.Item
                                        key={depto.id}
                                        label={depto.nombre}
                                        value={depto.id}
                                    />
                                ))}
                            </Picker>
                        </View>
                        {viewModel.formErrors.departamento && (
                            <Text style={styles.errorFieldText}>
                                {viewModel.formErrors.departamento}
                            </Text>
                        )}
                    </View>

                    {/* Botones */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={() => navigation.goBack()}
                            disabled={viewModel.isLoading}
                            activeOpacity={0.7}
                        >
                            <Icon name="close" size={20} color="#666" />
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.saveButton]}
                            onPress={handleSave}
                            disabled={viewModel.isLoading}
                            activeOpacity={0.7}
                        >
                            {viewModel.isLoading ? (
                                <ActivityIndicator color="#fff" size="small" />
                            ) : (
                                <>
                                    <Icon name="check" size={20} color="#fff" />
                                    <Text style={styles.saveButtonText}>Guardar</Text>
                                </>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
});

export default PersonasFormScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: '#666',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#03dac6',
        elevation: 4,
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    form: {
        padding: 16,
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffebee',
        padding: 12,
        marginBottom: 16,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#c62828',
        gap: 8,
    },
    errorText: {
        flex: 1,
        color: '#c62828',
        fontSize: 14,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    inputError: {
        borderColor: '#c62828',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    errorFieldText: {
        color: '#c62828',
        fontSize: 12,
        marginTop: 4,
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingLeft: 12,
    },
    dateIcon: {
        marginRight: 8,
    },
    dateInput: {
        flex: 1,
        padding: 12,
        paddingLeft: 0,
        fontSize: 16,
        borderWidth: 0,
    },
    helperText: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
        fontStyle: 'italic',
    },
    dateInfo: {
        marginTop: 8,
        gap: 6,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    validText: {
        color: '#2e7d32',
        fontSize: 14,
    },
    invalidText: {
        color: '#c62828',
        fontSize: 14,
    },
    infoText: {
        color: '#1976d2',
        fontSize: 14,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        gap: 6,
    },
    cancelButton: {
        backgroundColor: '#f5f5f5',
    },
    saveButton: {
        backgroundColor: '#03dac6',
    },
    cancelButtonText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '600',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});