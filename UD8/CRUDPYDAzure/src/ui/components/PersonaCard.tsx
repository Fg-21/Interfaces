import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Persona } from '../../domain/entities/Persona';

interface PersonaCardProps {
  persona: Persona;
  onEdit: () => void;
}

export default function PersonaCard({
  persona,
  onEdit,
}: PersonaCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        {persona.imagen ? (
          <Image
            source={{ uri: persona.imagen }}
            style={styles.avatar}
            onError={() => console.log('Error loading image')}
          />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Icon name="person" size={32} color="#fff" />
          </View>
        )}
        
        <View style={styles.info}>
          <Text style={styles.nombre}>
            {persona.nombre} {persona.apellido}
          </Text>
          <View style={styles.detailRow}>
            <Icon name="phone" size={16} color="#666" />
            <Text style={styles.detailText}>{persona.telefono}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="location-on" size={16} color="#666" />
            <Text style={styles.detailText} numberOfLines={1}>
              {persona.direccion}
            </Text>
          </View>
          {persona.fechaNac && (
            <View style={styles.detailRow}>
              <Icon name="cake" size={16} color="#666" />
              <Text style={styles.detailText}>{persona.fechaNac}</Text>
            </View>
          )}
        </View>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={onEdit}
          activeOpacity={0.7}
        >
          <Icon name="edit" size={20} color="#03dac6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: '#e0e0e0',
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#03dac6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  actionButton: {
    padding: 8,
    borderRadius: 8,
  },
  editButton: {
    backgroundColor: '#e0f7f5',
  },
  deleteButton: {
    backgroundColor: '#ffebee',
  },
});